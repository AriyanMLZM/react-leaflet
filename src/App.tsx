import { useState } from 'react'
import { Icon } from '@iconify/react'
import Map from './components/Map'

const App = () => {
	const [isDark, setIsDark] = useState(false)

	return (
		<main className="w-full h-screen">
			<button
				type="button"
				onClick={() => setIsDark((prev) => !prev)}
				className="w-[40px] h-[40px] items-center justify-center flex absolute top-[10px] right-[10px] bg-black/80 z-10 rounded-full hover:opacity-70 active:opacity-70"
			>
				<Icon icon="gg:dark-mode" className="text-[25px] text-white" />
			</button>
			<Map isDark={isDark} />
		</main>
	)
}

export default App
