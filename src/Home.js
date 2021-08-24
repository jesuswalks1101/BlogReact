import Feed from "./Feed"

const Home = ({ posts }) => {
    return (
        <main class="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem"}}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home
