import fitz
from langchain_text_splitters import RecursiveCharacterTextSplitter

file_path ="sample_text.pdf"
text=" "
doc = fitz.open(file_path)

for t in doc:
    text += t.get_text() 

splitters =RecursiveCharacterTextSplitter(
    chunk_size=200,
    chunk_overlap=10
)

data =splitters.split_text(text)
print("the size od chunk is :",len(data))
for i ,chunk in enumerate(data):
    print(f"\nchunks {i+1}: \n {chunk}")