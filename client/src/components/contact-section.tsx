import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, Check, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="section section-light" data-testid="contact-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" data-testid="contact-title">
            Contáctanos
          </h2>
          <p className="section-subtitle" data-testid="contact-subtitle">
            ¿Listo para llevar tu proyecto al siguiente nivel? Cuéntanos tu idea y hagámosla realidad juntos
          </p>
        </div>

        <div className="section-content">
          <div className="contact-card">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-md-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label">Nombre Completo</label>
                  <input 
                    type="text"
                    placeholder="Tu nombre completo" 
                    {...form.register("name")}
                    className="form-input"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <div className="form-error">{form.formState.errors.name.message}</div>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com" 
                    {...form.register("email")}
                    className="form-input"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <div className="form-error">{form.formState.errors.email.message}</div>
                  )}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">WhatsApp (Opcional)</label>
                <input 
                  type="tel" 
                  placeholder="+54 9 11 1234-5678" 
                  {...form.register("whatsapp")}
                  className="form-input"
                  data-testid="input-whatsapp"
                />
                {form.formState.errors.whatsapp && (
                  <div className="form-error">{form.formState.errors.whatsapp.message}</div>
                )}
              </div>
              
              <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea 
                  placeholder="Cuéntanos sobre tu proyecto..." 
                  {...form.register("message")}
                  className="form-textarea"
                  data-testid="input-message"
                />
                {form.formState.errors.message && (
                  <div className="form-error">{form.formState.errors.message.message}</div>
                )}
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={contactMutation.isPending}
                data-testid="contact-submit"
              >
                {contactMutation.isPending ? (
                  <>
                    <div className="spinner"></div>
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check style={{ width: '1.25rem', height: '1.25rem' }} />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send style={{ width: '1.25rem', height: '1.25rem' }} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
