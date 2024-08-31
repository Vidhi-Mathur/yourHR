import { Link } from "react-router-dom"
import job from "../../assets/job1.jpg"
import { CheckCheck, ListRestart, Link as LinkIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="bg-[#F3C3D7] text-black py-12 md:py-24 lg:py-32">
            <div className="container px-6 md:px-12 grid gap-6 md:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Find Your Dream Job with YourHR</h1>
                <p className="text-lg md:text-xl">
                  YourHR helps you discover the perfect job based on your qualifications and preferences.
                </p>
                <Link to="/signup" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-[#F3C3D7] font-medium shadow-sm transition-colors hover:bg-[#ff5fa1] hover:text-black focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Sign Up Now
                </Link>
              </div>
              <img src={job} alt="job" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" style={{ aspectRatio: "600/300", objectFit: "cover" }} />
            </div>
          </section>
          <section className="py-12 md:py-24 lg:py-32 bg-[#e7f2f6]">
            <div className="container px-6 md:px-12 grid gap-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Features That Make Your Job Search Easier</h2>
                    <p className="text-lg md:text-xl text-black">YourHR offers a range of features to help you find your dream job.</p>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#e5f7ff] p-6 rounded-lg shadow-md">
                      <ListRestart size={48} color="#F3C3D7" strokeWidth={1.75} />
                      <h3 className="text-xl font-bold mt-4">Resume Storage</h3>
                      <p className="text-black mt-2">Store your resume securely and access it anytime.</p>
                    </div>
                    <div className="bg-[#e5f7ff] p-6 rounded-lg shadow-md">
                        <CheckCheck size={48} color="#F3C3D7" strokeWidth={1.75} />
                        <h3 className="text-xl font-bold mt-4">Job Matching</h3>
                        <p className="text-black mt-2">Get personalized job recommendations based on your qualifications.</p>
                    </div>
                    <div className="bg-[#e5f7ff] p-6 rounded-lg shadow-md">
                        <LinkIcon size={48} color="#F3C3D7" strokeWidth={1.75} />
                        <h3 className="text-xl font-bold mt-4">Personalized Recommendations</h3>
                        <p className="text-black mt-2">Receive tailored job recommendations based on your preferences.</p>
                    </div>
                </div>
              </div>
            </section>
        </main> 
    </div>
  )
}