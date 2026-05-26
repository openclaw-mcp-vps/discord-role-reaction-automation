export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Automation
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-assign Discord roles<br />
          <span className="text-[#58a6ff]">with emoji reactions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Your bot watches specific messages and instantly assigns or removes roles when members react with designated emojis. No coding required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant setup.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-white mb-1">Instant Role Assignment</h3>
            <p className="text-sm text-[#8b949e]">Roles are granted or revoked the moment a user reacts or removes a reaction.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🎛️</div>
            <h3 className="font-semibold text-white mb-1">Web Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Configure emoji-to-role mappings, manage servers, and monitor activity from one place.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="font-semibold text-white mb-1">Secure & Reliable</h3>
            <p className="text-sm text-[#8b949e]">OAuth2 login, minimal permissions, and 99.9% uptime so your community never misses a beat.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$8<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need to automate roles</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited reaction-role mappings",
              "Up to 10 Discord servers",
              "Web dashboard access",
              "Custom emoji support",
              "Priority support",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now — $8/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I set up the bot?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, invite the bot to your server with one click. Then use the web dashboard to pick a message, choose an emoji, and map it to a role. Done in under 2 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it work with custom server emojis?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The bot supports both standard Unicode emojis and custom emojis from your server. Just select them in the dashboard when creating a mapping.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens if I cancel?</h3>
            <p className="text-sm text-[#8b949e]">You keep access until the end of your billing period. After that, the bot stops responding to reactions. Your configuration is saved for 30 days if you resubscribe.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Discord Role Bot. All rights reserved.
      </footer>
    </main>
  );
}
