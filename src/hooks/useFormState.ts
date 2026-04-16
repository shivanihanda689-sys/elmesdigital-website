import { useState, useCallback } from "react";
import type { FormData } from "@/types";

const INITIAL_FORM: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  interests: [],
  timeline: "",
  budget: "",
};

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useFormState() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateField = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleInterest = useCallback((interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  }, []);

  const reset = useCallback(() => {
    setForm(INITIAL_FORM);
    setStatus("idle");
  }, []);

  const isValid =
    form.firstName.trim() !== "" &&
    form.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const submit = useCallback(async () => {
    if (!isValid) return;
    setStatus("submitting");
    // TODO: Wire up to an actual API endpoint or email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }, [form, isValid]);

  return { form, status, updateField, toggleInterest, reset, isValid, submit };
}
