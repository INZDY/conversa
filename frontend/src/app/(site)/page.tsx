import AuthForm from "@/components/Auth/AuthForm";

export default function page() {
  return (
    <div
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px6 
        lg:px-8 
        bg-gray-700
      "
      >
      <AuthForm />
      
    </div>
  );
}
