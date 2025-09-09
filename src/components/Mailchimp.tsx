"use client";

import { mailchimp, newsletter } from "@/resources";
import {
  Button,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Row,
  Textarea,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(""); // Added state for form status

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const form = { name, email, message };

    console.log("form", form);

    return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const result = await response.json();
        setStatus("error");
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Failed to send message. Please try again later.");
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          Get in touch
        </Heading>
        <Text
          wrap="balance"
          marginBottom="l"
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          I'd love to hear from you! Please fill out the form below and I'll get
          back to you as soon as possible.
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Column fillWidth maxWidth={24} s={{ direction: "column" }} gap="8">
          <Input
            id="mce-NAME"
            name="NAME"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            formNoValidate
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            errorMessage={error}
          />
          <Textarea
            id="mce-MESSAGE"
            name="MESSAGE"
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="clear">
            <Row height="48" vertical="center">
              <Button
                type="submit"
                size="m"
                fillWidth
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </Row>
            {status === "success" && (
              <Text color="green">Message sent successfully!</Text>
            )}
            {status === "error" && <Text color="red">{error}</Text>}
          </div>
        </Column>
      </form>
    </Column>
  );
};
