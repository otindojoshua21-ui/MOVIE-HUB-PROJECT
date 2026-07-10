const trendingItems = [
  { title: 'Aurora Drift', tag: 'Fantasy', image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop' },
  { title: 'Shadow District', tag: 'Mystery', image: 'https://images.unsplash.com/photo-1495148422847-8c184172df8c?w=400&h=300&fit=crop' },
  { title: 'Echoes of Tomorrow', tag: 'Adventure', image: 'https://images.unsplash.com/photo-1495221239763-c1433bd89cb6?w=400&h=300&fit=crop' }
];

function TrendingSection() {
  return (
    <section id="trending" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Trending Now</h2>
          <a href="#" className="text-sm font-medium text-cyan-300">Explore more</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {trendingItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/20">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="bg-gradient-to-br from-white/10 to-cyan-400/10 p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.tag}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingSection;
