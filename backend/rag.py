import fitz 

def getText(sample):
    text=" "
    doc = fitz.open(sample)
    
    for txt in doc:
        text += txt.get_text()
    
    return text

data = getText("sample_text.pdf")
print(data)