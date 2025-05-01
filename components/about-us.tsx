export function AboutUs() {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About TechRadar</h2>
            <p className="text-muted-foreground md:text-lg">
              We aggregate the best student tech events from across the internet, making it easy for college innovators
              to discover opportunities to learn, connect, and grow.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-medium">"Code, connect, and conquer with college tech events." 💡</p>
              <p className="text-muted-foreground">
                Our mission is to bridge the gap between tech-savvy students and the events that can help them advance
                their careers and expand their networks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Events Listed</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Monthly Users</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Partner Colleges</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-white/10 p-6 flex flex-col items-center justify-center text-center">
              <div className="text-4xl font-bold mb-2">25k+</div>
              <div className="text-sm text-muted-foreground">Newsletter Subscribers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
