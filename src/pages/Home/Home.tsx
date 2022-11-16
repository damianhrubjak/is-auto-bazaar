import Heading from "@/components/Heading";

function Home() {
    return (
        <div>
            <Heading>
                <span>Domov</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>
        </div>
    );
}

export default Home;
