import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { UserPlusIcon } from "lucide-react";

export default function CardUsers() {
  return (
    <div className="mt-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Usuários Registrados
          </CardTitle>
          <UserPlusIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Johnson</TableCell>
                <TableCell>bob@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alice Williams</TableCell>
                <TableCell>alice@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tom Davis</TableCell>
                <TableCell>tom@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
