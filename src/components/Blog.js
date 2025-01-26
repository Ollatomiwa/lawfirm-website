import React from 'react'

function Blog() {
  return (
    <section id="blog" className="section">
    <div className="container mx-auto flex justify-center items-center text-center">
     
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn lg:w-[580px] text-4xl font-primary font-extrabold mb-4 bg-primary hover:bg-accent-hover"
      >
        Click to go to Blog Page
      </a>
    </div>
  </section>
  )
}

export default Blog