"use client";
import React from "react";
import { useRouter } from "next/router";

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Blog Detail Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
