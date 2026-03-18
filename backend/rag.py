from langchain_text_splitters import CharacterTextSplitter

text ="""

Artificial Intelligence (AI) is transforming the modern world by enabling machines to perform tasks that typically require human intelligence. These tasks include learning from data, recognizing patterns, understanding natural language, and making decisions.

Machine Learning (ML), a subset of AI, focuses on building systems that can learn automatically from data without being explicitly programmed. It uses statistical techniques to improve performance on tasks such as classification, regression, and clustering.

Deep Learning is a specialized area within machine learning that uses neural networks with many layers. These networks are capable of learning complex patterns in large datasets and are widely used in applications like image recognition, speech processing, and natural language understanding.

Natural Language Processing (NLP) is a branch of AI that deals with the interaction between computers and human language. It allows machines to read, understand, and generate text, making applications like chatbots, translators, and voice assistants possible.

Computer Vision is another important field of AI that focuses on enabling machines to interpret visual information from images and videos. It is used in applications such as facial recognition, medical imaging, and autonomous driving.

AI systems are widely used in industries such as healthcare, finance, education, and transportation. In healthcare, AI helps in diagnosing diseases and recommending treatments. In finance, it is used for fraud detection and algorithmic trading.

Despite its many advantages, AI also presents challenges and ethical concerns. These include data privacy issues, bias in algorithms, lack of transparency, and potential job displacement due to automation.

Researchers are working on developing responsible AI systems that are fair, transparent, and accountable. The future of AI is expected to bring even more advanced technologies that will improve efficiency and solve complex global problems.

Artificial Intelligence continues to evolve rapidly, and its impact on society is growing every day. It is important for developers and users to understand both the benefits and risks associated with this powerful technology.
"""

splitter =CharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=10
)
chunks = splitter.split_text(text)

print(chunks.split("|"))