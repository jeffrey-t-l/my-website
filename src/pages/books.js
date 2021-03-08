import React from "react"
import Layout from "../components/Layout"

const Books = ({ children }) => {
    return (
      <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
            <div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>Books I am currently reading</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">That War of Art; Steven Pressfield</div>
                </div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-8 text-lg text-gray-700 sm:mt-8"><strong>Books I call my favorites</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">And the Hippos Were Boiled in their Tanks; William S Burroughs &amp; Jack Keroauc</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">Slaughterhouse Five; Kurt Vonnegut</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">Cat's Cradle; Kurt Vonnegut</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">American Buffalo; Steven Rinella</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">Animal Farm, George Orwell</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">On The Road, Jack Keroauc</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">Island; Aldous Huxley</div>
                </div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-8 text-lg text-gray-700 sm:mt-8"><strong>Books I'd like to read next</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">A World Without Email; Cal Newport</div>
                </div>
            </div>
        </main>
    </Layout>
    )
}

export default Books