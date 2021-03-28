export default function CardsGrid({ children }) {
    return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4">{children}</div>
}
