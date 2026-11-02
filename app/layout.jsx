export const metadata = {
	title: 'TenOrca',
	description: 'TenOrca website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
