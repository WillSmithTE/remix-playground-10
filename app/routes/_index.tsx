import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="flex flex-col gap-4 px-5"
    >
      <h1 className="text-3xl">Home</h1>
      <Link to="/blog" className="p-5 rounded-lg bg-blue-600">
        <h2 className="text-xl mb-5">Remix Link</h2>
        <EditProfileButton />
      </Link>

      <a href="/blog" className="p-5 rounded-lg bg-orange-600">
        <h2 className="text-xl mb-5">Regular {"<a>"}</h2>
        <EditProfileButton />
      </a>
    </div>
  );
}

function EditProfileButton() {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDialog(true);
  };

  return (
    <>
      <Button onClick={openDialog} variant="outline">
        Edit Profile
      </Button>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent
          className="sm:max-w-[425px]"
          overlayProps={{
            onClick: (e) => {
              // e.stopPropagation();
              // setShowDialog(false);
            },
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <p>some stuff</p>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
