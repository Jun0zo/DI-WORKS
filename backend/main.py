from fastapi import FastAPI
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

# Connect to MongoDB
client = MongoClient("mongodb://dilab:dilab1@220.68.27.149:27017/")
db = client["EssayDB"]
collection = db["Essay"]

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