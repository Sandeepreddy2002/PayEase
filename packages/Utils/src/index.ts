

export  default function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
  
    return formatter.format(amount);
  }