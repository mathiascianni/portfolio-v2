const Container = ({ children }) => {
    return (
        <section className="md:container md:px-32 mx-auto">
            {children}
        </section>
    );
}

export default Container;
