const Container = ({ children, id }) => {
    return (
        <section className="px-2 md:container md:px-8 lg:px-32 mx-auto" id={id}>
            {children}
        </section>
    );
}

export default Container;
