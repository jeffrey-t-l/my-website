import React from "react"
import Layout from "../components/Layout"

const Resume = ({ children }) => {
    return (
      <Layout>
        <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
            <div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-4 text-lg text-gray-700 sm:mt-8"><strong>WeWork Management</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Manager, People Systems Integrations</div>
                </div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-8 text-lg text-gray-700 sm:mt-8"><strong>Uber Technologies</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Systems Engineer II</div>
                    <div className="px-6 mt-8 text-sm text-gray-700">Systems Engineer I</div>
                </div>
                <div class="grid grid-rows-1 md:grid-rows-1 ...">
                    <p className="px-2 mt-8 text-lg text-gray-700 sm:mt-8"><strong>DayNine Consulting</strong></p>
                    <div className="px-6 mt-8 text-sm text-gray-700">Integration Consultant</div>
                </div>
            </div>
        </main>
    </Layout>
    )
}

export default Resume