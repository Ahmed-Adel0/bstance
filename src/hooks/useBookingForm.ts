import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  goal: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  goal?: string;
}

export const useBookingForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', goal: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your WhatsApp number';
    if (!formData.goal) newErrors.goal = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing/selecting
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real scenario, you might want to get the text of the selected option
      // For simplicity here, we'll just use the value or you could pass a mapping
      const msg = `🎯 طلب حجز — عرض سحب الافتتاح الكبير\n\nالاسم: ${formData.name}\nالواتساب: ${formData.phone}\nالخدمة المطلوبة: ${formData.goal}\n\n— مرسلة من صفحة سحب B•Stance الافتتاح الكبير —`;
      window.open(`https://wa.me/201279266345?text=${encodeURIComponent(msg)}`, '_blank');
      setIsSubmitted(true);
    } else {
      alert("من فضلك أكمل الاسم والواتساب وحدد الخدمة 🙏");
    }
  };

  return { formData, errors, isSubmitted, handleChange, handleSubmit };
};
