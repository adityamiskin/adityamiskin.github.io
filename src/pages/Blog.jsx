import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { fetch } from 'whatwg-fetch';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const loadBlogs = async () => {
			const blogFiles = import.meta.glob('../assets/blogs/*.md');
			const promises = Object.keys(blogFiles).map(async (key) => {
				const response = await fetch(key);
				const text = await response.text();
				return text;
			});
			const blogs = await Promise.all(promises);
			setBlogs(blogs);
		};

		loadBlogs();
	}, []);

	return <Markdown>{blogs[0]}</Markdown>;
};

export default Blog;
