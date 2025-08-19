import { createServer } from "http";
import { storage } from "./storage.js";
import { z } from "zod";

const insertContactMessageSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  whatsapp: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function registerRoutes(app) {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Mensaje enviado correctamente" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Datos inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Error interno del servidor" 
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener mensajes" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}