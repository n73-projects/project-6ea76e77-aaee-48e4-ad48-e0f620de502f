import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 dark:from-background dark:to-muted/20">
      {/* Theme Toggle in top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <Card className="w-full max-w-2xl shadow-2xl border-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>
            <CardTitle className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Hello, World!
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Welcome to your modern React app with TypeScript, Tailwind CSS, and shadcn/ui
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">⚛️</span>
                </div>
                <span className="text-sm font-medium">React 18</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/50">
                <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎨</span>
                </div>
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Ready to build something amazing! Try switching between light and dark modes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
