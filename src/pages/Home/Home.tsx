import Heading from "@/components/Heading";

function Home() {
    return (
        <div>
            <Heading>
                <span>Domov</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>
            <div className="group relative">
                <div className="absolute top-8 left-8 z-10 h-full w-full rounded-lg bg-purple-500/90 transition duration-500 group-hover:translate-y-3 group-hover:translate-x-4"></div>
                <div className="absolute -top-5 -left-6 z-10 h-[20%] w-[10%] rounded-lg bg-purple-500/90 transition duration-500 group-hover:-translate-y-3 group-hover:-translate-x-3"></div>
                <div className="relative z-40 mt-20">
                    <a href="/schema.jpeg" target={"_blank"}>
                        <img
                            className="z-50 block rounded-lg transition duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"
                            src="/schema.jpeg"
                            alt="SCHEMA"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
