interface RowProps {
	children?: React.ReactNode;
	direction?: "row" | "column";
}

const Row = ({ children, direction = "row" }: RowProps) => {
	return <div style={{ display: "flex", flexDirection: direction, gap: "2%" }}> { children } </div> 
} 

export { Row }