import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4 f">
          <p className="text-green-400">$ login or register</p>
          <p className="text-white">+ codewise v1.0.0</p>
          <p className="text-white">
            added 1 package, and audited 2 packages in 3s
          </p>
          <Input placeholder="username" type="email" className="w-full mt-2"></Input>
          <Input placeholder="password" type="password" className="w-full mt-2"></Input>
          <Button className="w-full mt-2 mb-2">login</Button>
        </div>
        <div className="flex justify-between">
          <a href="#" className="text-white">registrar-se</a>
        </div>
      </aside>
    </div>
  );
}
