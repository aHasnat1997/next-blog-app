import Image from "next/image";

const LatestBlog = () => {
  const blogsData = [
    {
      "title": "The Power of Positive Thinking",
      "author": "Jane Doe",
      "date": "2024-04-23",
      "content": "In today's fast-paced world, maintaining a positive outlook can be challenging...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 150
    },
    {
      "title": "10 Tips for Better Time Management",
      "author": "John Smith",
      "date": "2024-04-20",
      "content": "Time management is crucial for productivity and success...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 200
    },
    {
      "title": "The Importance of Exercise for Mental Health",
      "author": "Emily Johnson",
      "date": "2024-04-18",
      "content": "Exercise is not just beneficial for physical health but also plays a significant role in maintaining mental well-being...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 120
    },
    {
      "title": "Exploring Meditation Techniques",
      "author": "Michael Brown",
      "date": "2024-04-15",
      "content": "Meditation has been practiced for centuries and offers a wide range of benefits for mind and body...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 180
    },
    {
      "title": "The Power of Positive Thinking",
      "author": "Jane Doe",
      "date": "2024-04-23",
      "content": "In today's fast-paced world, maintaining a positive outlook can be challenging...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 150
    },
    {
      "title": "10 Tips for Better Time Management",
      "author": "John Smith",
      "date": "2024-04-20",
      "content": "Time management is crucial for productivity and success...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 200
    },
    {
      "title": "The Importance of Exercise for Mental Health",
      "author": "Emily Johnson",
      "date": "2024-04-18",
      "content": "Exercise is not just beneficial for physical health but also plays a significant role in maintaining mental well-being...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 120
    },
    {
      "title": "Exploring Meditation Techniques",
      "author": "Michael Brown",
      "date": "2024-04-15",
      "content": "Meditation has been practiced for centuries and offers a wide range of benefits for mind and body...",
      "image_url": "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      "like_count": 180
    },
  ];

  return (
    <section className="max-section py-8">
      <h1 className="text-center text-4xl font-semibold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-2 gap-4">
        {
          blogsData.slice(0, 2).map((blog, i) => <div key={i}>
            <Image
              alt="Blog Image"
              src={blog.image_url}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {
          blogsData.slice(2, 6).map((blog, i) => <div key={i}>
            <Image
              alt="Blog Image"
              src={blog.image_url}
              className="w-full"
              width={500}
              height={500}
            />
            <h4 className="text-2xl">{blog.title}</h4>
          </div>)
        }
      </div>
    </section>
  );
};

export default LatestBlog;