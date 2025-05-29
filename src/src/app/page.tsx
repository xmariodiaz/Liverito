// app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image
        src="/logoLiverito.png"
        alt="Liverito Logo"
        width={300}
        height={300}
        className="mb-8"
      />
      <h1 className="text-3xl font-bold text-center">Welcome to Liverito</h1>
    </div>
  )
}