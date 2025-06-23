export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto grid gap-4">
      <input type="text" placeholder="Name" className="border px-4 py-2 rounded" />
      <input type="email" placeholder="Email" className="border px-4 py-2 rounded" />
      <input type="text" placeholder="Company" className="border px-4 py-2 rounded" />
      <button type="submit" className="bg-primary text-white font-semibold px-6 py-2 rounded">Submit</button>
    </form>
  )
}
