import fitz
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_ollama import OllamaEmbeddings

file_path ="sample_text.pdf"
text=" "
doc = fitz.open(file_path)

for t in doc:
    text += t.get_text() 

splitters =RecursiveCharacterTextSplitter(
    chunk_size=200,
    chunk_overlap=10
)

chunk =splitters.split_text(text)
print("the size od chunk is :",len(chunk))

embeddings =OllamaEmbeddings(model ="nomic-embed-text")

vectors =embeddings.embed_documents(chunk)
print(len(vectors))
print(len(vectors[0]))