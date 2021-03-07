import React from "react"
import Layout from "../components/Layout"

const Blog = ({ children }) => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">You didn't really think I'd write a blog, did you?</div>
      </main>
  </Layout>
  )
}

  export default Blog