import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { productsData, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: "Product Not Found | Krishna Packaging Industry",
    };
  }

  return {
    title: `${product.name} | Krishna Packaging Industry Faridabad`,
    description: `${product.tagline}. Price: ${product.priceRange}. Speed: ${product.speed}. Manufactured by Krishna Packaging Industry Faridabad.`,
    openGraph: {
      title: `${product.name} | Krishna Packaging Industry`,
      description: product.description,
      images: [
        {
          url: product.primaryImage,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
