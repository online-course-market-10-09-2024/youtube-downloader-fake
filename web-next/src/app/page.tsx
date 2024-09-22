import FormUrl from "@/components/FormUrl"

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col py-10 gap-y-5">
      <h1 className="text-3xl font-bold text-center">Youtube Downloader Fake</h1>

      <FormUrl />
    </div>
  )
}
