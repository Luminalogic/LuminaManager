<div align="center">
   <img width="361" height="143" alt="imagen" src="https://github.com/user-attachments/assets/2fab1e4c-b884-49f1-a98b-a21b045d2737" />
</div>

# LuminaManager

Software interno para gestionar la agencia **Lumina**: leads entrantes desde la web, proyectos a medida (p. ej. la clínica dental), cobros de *setup* y automatización de cobros recurrentes (**MRR**) de Micro‑SaaS.

---

## Tabla de contenidos

- [Qué es](#qué-es)
- [Módulos](#módulos)
- [Flujo de trabajo (alto nivel)](#flujo-de-trabajo-alto-nivel)
- [Run Locally](#run-locally)
- [Configuración (variables de entorno)](#configuración-variables-de-entorno)
- [Scripts](#scripts)
- [Roadmap](#roadmap)

---

## Qué es

**LuminaManager** centraliza la operación diaria de la agencia:

- **Captación y seguimiento de leads** que llegan desde la web.
- **Gestión de proyectos a medida** para clientes (alcance, estado, entregables, etc.).
- **Control del cobro inicial (setup)** por alta/configuración.
- **Automatización del MRR**: seguimiento y ejecución de cobros recurrentes de los Micro‑SaaS.

> Objetivo: tener en un solo lugar el pipeline comercial, la ejecución de proyectos y la facturación/recurrentes.

---

## Módulos

- **Leads**
  - Registro de leads entrantes
  - Estado del lead (nuevo, contactado, calificado, propuesta, ganado/perdido)

- **Proyectos**
  - Proyectos a medida por cliente (ej.: clínica dental)
  - Estados/etapas y seguimiento

- **Cobros**
  - Cobro de **setup** (pago único)
  - Cobros **recurrentes (MRR)** para Micro‑SaaS

*(Si me confirmas si hay facturas, recordatorios, Stripe, etc., lo dejo documentado con más detalle.)*

---

## Flujo de trabajo (alto nivel)

1. Entra un **lead** desde la web.
2. Se califica y, si procede, se convierte en **cliente/proyecto**.
3. Se registra y controla el **cobro de setup**.
4. Si el cliente tiene un Micro‑SaaS activo, se configura/automatiza el **MRR**.

---

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`