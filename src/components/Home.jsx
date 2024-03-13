import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import cardsInfo from '../assets/homeCardsInfo.json';

const Home = () => {

    return(
        <section className="home">
            <div className="mt-10 text-4xl">
                <h1>Welcome to LifeSyncHub – Your Ultimate Lifestyle Companion!</h1>
            </div>
            <div className="mt-10 text-1xl">
                <h6 className="mt-10 text-3xl">🚀 Get Started Today!</h6>
                <p className="mt-10 text-1xl">Transform your daily routine into an organized and enjoyable experience. Welcome to a lifestyle where convenience meets creativity! Explore LifeSync Hub and embark on a journey of memories, financial empowerment, and culinary delights.</p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-5 lg:flex lg:flex-row lg:mt-10 lg:justify-center lg:gap-5">
            {Object.values(cardsInfo.cards).map((card) => (
                <Card  key={card.title}>
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{card.text}</p>
                    </CardContent>
                </Card>
            ))}
            </div>
        </section>
    )
}

export default Home