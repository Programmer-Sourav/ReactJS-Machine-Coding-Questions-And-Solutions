import "./infinitescroll.css";
import { useEffect, useState, useCallback } from "react";

export default function InfiniteScrollTwo() {
  const [images, setImages] = useState([]); // Store all fetched images
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1); // Keep track of the current page

  const fetchImages = async () => {
    setIsFetching(true); // Indicate fetching has started
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${page}&per_page=15`,
        {
          headers: {
            Authorization: "nOmU6zdu4gKnbYky3JJP1yRtMXET9S11Jsd1QnK94rXYEPXirYXvgofm", // Replace with your API key
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      // Append new photos to the existing array
      setImages((prevImages) => [
        ...prevImages,
        ...data.photos.map((photo) => ({
          id: photo.id,
          url: photo.src.medium,
        })),
      ]);

      // Increment the page for the next fetch
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsFetching(false); // Fetching finished
    }
  };

  // Handle infinite scrolling
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 &&
      !isFetching
    ) {
      fetchImages();
    }
  }, [isFetching]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [handleScroll]);

  useEffect(() => {
    // Fetch initial images
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <div className="container">
        <div className="image-container">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={`Image ${image.id}`}
              height="256px"
              width="256px"
              className="image"
            />
          ))}
        </div>
        {isFetching && (
          <div className="loader">
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    </div>
  );
}
