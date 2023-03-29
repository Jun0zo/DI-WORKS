from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "http://220.68.27.120:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB
client = MongoClient("mongodb://dilab:dilab1@220.68.27.149:27017/")
db = client["EssayDB"]
collection = db["Essay"]

print(collection)

class Essay(BaseModel):
    id: str
    c1: str
    c2: str
    c3: str
    o1: str
    o2: str
    p1: str
    p2: str
    v: str
    r: str
    
class Pagination(BaseModel):
    page: int = 1
    page_size: int = 10
    
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/essays")
async def get_essays(page: int = Query(1, ge=1), page_size: int = Query(10, ge=1, le=100)):
    # Calculate offset and limit for pagination
    offset = (page - 1) * page_size
    limit = page_size
    
    # Query for essays with pagination
    essays = collection.find({}, {"_id":0,  "id": 1, "Topic":1, "Type":1, "Creativity Score": 1, "Date": 1}).skip(offset).limit(limit)
    
    print(essays)
    # Convert query result to list of dictionaries
    essay_list = [essay_dict for essay_dict in essays]
    
    # Return list of essays with pagination metadata
    return {
        "essays": essay_list,
        "page": page,
        "page_size": page_size,
        "total_count": collection.count_documents({})
    }

@app.get('/essays/{essay_id}')
async def get_essay(essay_id: str):
    res = collection.find_one({"id": essay_id})
    res.pop("_id")
    return res

@app.put("/essays/{essay_id}")
async def update_essay(essay_id: str, essay: Essay):
    # Check if essay with given ID exists
    if not collection.count_documents({"_id": essay_id}):
        raise HTTPException(status_code=404, detail="Essay not found")
    # Update essay in database
    result = collection.update_one(
        {"_id": essay_id},
        {"$set": {
            "title": essay.title,
            "content": essay.content,
            "author": essay.author,
            "creativity_score": essay.creativity_score
        }}
    )
    # Check if essay was successfully updated
    if not result.modified_count:
        raise HTTPException(status_code=400, detail="Failed to update essay")
    return {"message": "Essay updated successfully"}