import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
	const { removeBook } = useContext(BookContext);
	return (
		<li
			style={{ margin: "5px", padding: "5px" }}
			onClick={e => removeBook(book.id)}
		>
			<div className="title">{book.title}</div>
			<div className="author">{book.author}</div>
		</li>
	);
};

export default BookDetails;
