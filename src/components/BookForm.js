import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
	const { addBook } = useContext(BookContext);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const titleFieldHandler = e => {
		setTitle(e.target.value);
	};
	const authorFieldHandler = e => {
		setAuthor(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		addBook(title, author);
		setAuthor("");
		setTitle("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Book Title"
				value={title}
				onChange={titleFieldHandler}
			/>
			<input
				type="text"
				placeholder="Author"
				value={author}
				onChange={authorFieldHandler}
			/>
			<input type="submit" value="Add book" />
		</form>
	);
}

export default BookForm;
