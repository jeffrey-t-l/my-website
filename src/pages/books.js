import React from "react"
import Layout from "../components/Layout"

const Books = ({ children }) => {
    return (
      <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div class="grid grid-rows-1 md:grid-rows-1 ...">
            <div>And the Hippos Were Boiled in their Tanks; William S Burroughs &amp; Jack Keroauc</div>
            <div>Slaughterhouse Five; Kurt Vonnegut</div>
            <div>Cat's Cradle; Kurt Vonnegut</div>
            <div>American Buffalo; Steven Rinella</div>
            <div>Animal Farm, George Orwell</div>
            <div>On The Road, Jack Keroauc</div>
            <div>Island; Aldous Huxley</div>
        </div>
        </main>
    </Layout>
    )
}

export default Books