import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.4%",
      trend: "down",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
    },
  ]

  const recentOrders = [
    { id: "#3210", customer: "John Doe", amount: "$250.00", status: "Completed" },
    { id: "#3209", customer: "Jane Smith", amount: "$150.00", status: "Processing" },
    { id: "#3208", customer: "Bob Johnson", amount: "$350.00", status: "Completed" },
    { id: "#3207", customer: "Alice Brown", amount: "$180.00", status: "Pending" },
    { id: "#3206", customer: "Charlie Wilson", amount: "$420.00", status: "Completed" },
  ]

  const topProducts = [
    { name: "Premium Widget", sales: 245, revenue: "$12,250" },
    { name: "Deluxe Gadget", sales: 189, revenue: "$9,450" },
    { name: "Standard Tool", sales: 156, revenue: "$7,800" },
    { name: "Basic Kit", sales: 134, revenue: "$6,700" },
  ]

  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.title}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1 text-sm">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }
                    >
                      {stat.change}
                    </span>
                    <span className="text-muted-foreground">from last month</span>
                  </div>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Orders */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <p className="text-sm text-muted-foreground">
              You have {recentOrders.length} orders this week
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.id}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-semibold">{order.amount}</p>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b p-6">
            <h3 className="text-lg font-semibold">Top Products</h3>
            <p className="text-sm text-muted-foreground">
              Best selling products this month
            </p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">
            Monthly revenue for the last 6 months
          </p>
        </div>
        <div className="p-6">
          <div className="flex h-[300px] items-end justify-around gap-2">
            {[65, 45, 75, 55, 85, 70].map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-purple-600 transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
