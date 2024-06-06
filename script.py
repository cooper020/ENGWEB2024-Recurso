import json

def update_books(books):
    for book in books:
        
        
        book['genres'] = eval(book['genres'])
        book['characters'] = eval(book['characters'])
        book['awards'] = eval(book['awards'])
        book['ratingsByStars'] = eval(book['ratingsByStars'])
        book['setting'] = eval(book['setting'])
        

        if isinstance(book['author'], str):
            book['author'] = [author.strip() for author in book['author'].split(',')]

    return books

with open('dataset.json', 'r') as file:
    books = json.load(file)

updated_books = update_books(books)

with open('livros.json', 'w') as file:
    json.dump(updated_books, file, indent=4)

print("The data has been successfully updated and saved to 'livros.json'")
