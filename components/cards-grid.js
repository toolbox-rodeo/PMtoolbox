export default function CardsGrid({ children }) {
    return <div className="grid grid-cols-1 md:grid-cols-3 md:col-gap-3 lg:col-gap-3 row-gap-4 md:row-gap-4 mb-4">{children}</div>
}
