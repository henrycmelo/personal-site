import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Spinner,
  Text,

} from "@chakra-ui/react";
import * as Yup from "yup";
import { useAlertContext } from "../context/alertContext";
import CustomizedButton from "./CustomizedButton";
import { reviewsAPI } from "../api/reviewsApi";

const LeaveReviewSection = () => {
  const { onOpen, onClose, capitalizeEachWord } = useAlertContext();
  const titleText = capitalizeEachWord("Leave a review!");
  const [isLoading, setLoading] = useState(false);
  const responses = [
    {
      type: "error",
      message: "Something went wrong, please try again later!",
    },
    {
      type: "success",
      message: `Thank you for your review!`,
    },
  ];

  // List of valid invitation codes
  const VALID_INVITATION_CODES = process.env.REACT_APP_INVITATION_CODES 
    ? process.env.REACT_APP_INVITATION_CODES.split(',') 
    : [];

  const onSubmit = async (values, submitProps) => {
    setLoading(true);
    try {
      // Check if invitation code is valid (additional check despite Yup validation)
      if (!VALID_INVITATION_CODES.includes(values.invitationCode)) {
        throw new Error("Invalid invitation code");
      }

      await reviewsAPI.createReview({
        ...values,
        status: "pending" // Set initial status as pending for approval workflow
      });
      
      const successMessage = responses[1].message;
      const successAlert = `${successMessage} Thanks for your review ${values.fullName}`;
      onOpen(responses[1].type, successAlert);
      submitProps.resetForm();
    } catch (error) {
      const genericMessage = responses[0].message;
      const specificMessage = error.message;
      const message = `${genericMessage} error ${specificMessage}`;
      onClose(responses[0].type, message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      reviewerRole: "",
      company: "",
      linkedinUrl: "",
      reviewText: "",
      invitationCode: "",
      consentToPublish: false,
      honeypot: "" // Honeypot field to catch bots
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      reviewerRole: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      company: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      linkedinUrl: Yup.string()
        .url("Must be a valid URL")
        .matches(
          /linkedin\.com/,
          "Must be a LinkedIn URL"
        ),
      reviewText: Yup.string()
        .min(10, "Too Short!")
        .max(500, "Too Long!")
        .required("Required"),
      invitationCode: Yup.string()
        .required("Invitation code is required")
        .test(
          "valid-code", 
          "Invalid invitation code", 
          value => VALID_INVITATION_CODES.includes(value)
        ),
      honeypot: Yup.string()
        .test(
          "is-empty", 
          "Bot detected", 
          value => !value // Should always be empty
        )
    }),
  });

  // Extra validation - Don't submit if honeypot is filled (bot detection)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formik.values.honeypot) {
      console.log("Bot detected, not submitting");
      return;
    }
    formik.handleSubmit();
  };

  return (
    <Box>
      <Text as="h2" textStyle={"h2"} pb={6}>
        {titleText}{" "}
      </Text>
      <Text textStyle="p" pb={4}>
        I appreciate your feedback! Please share your experience working with me.
      </Text>

      <VStack w="100%" alignItems="start" justifyContent="flex-start">
        <Box p={6} w="100%">
          <form
            onSubmit={handleSubmit}
            method="post"
            name="review"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="review" />

            {/* Honeypot field to catch bots - hidden from users */}
            <div style={{ display: 'none' }}>
              <input
                name="honeypot"
                id="honeypot"
                {...formik.getFieldProps("honeypot")}
              />
            </div>

            <VStack spacing={4} color="gray.600">
              <FormControl
                isInvalid={
                  formik.touched.fullName && formik.errors.fullName
                    ? true
                    : false
                }
              >
                <FormLabel htmlFor="fullName" textStyle="p">
                  Full Name *
                </FormLabel>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  variant="customInput"
                  {...formik.getFieldProps("fullName")}
                />
                <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.reviewerRole && formik.errors.reviewerRole ? true : false
                }
              >
                <FormLabel htmlFor="reviewerRole" textStyle="body">
                  Your Role *
                </FormLabel>
                <Input
                  id="reviewerRole"
                  name="reviewerRole"
                  placeholder="e.g. Project Manager, Developer, Designer"
                  variant="customInput"
                  {...formik.getFieldProps("reviewerRole")}
                />
                <FormErrorMessage>{formik.errors.reviewerRole}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.company && formik.errors.company ? true : false
                }
              >
                <FormLabel htmlFor="company" textStyle="body">
                  Company *
                </FormLabel>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your company name"
                  variant="customInput"
                  {...formik.getFieldProps("company")}
                />
                <FormErrorMessage>{formik.errors.company}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.linkedinUrl && formik.errors.linkedinUrl ? true : false
                }
              >
                <FormLabel htmlFor="linkedinUrl" textStyle="body">
                  LinkedIn URL
                </FormLabel>
                <Input
                  id="linkedinUrl"
                  name="linkedinUrl"
                  placeholder="https://www.linkedin.com/in/your-profile"
                  variant="customInput"
                  {...formik.getFieldProps("linkedinUrl")}
                />
                <FormErrorMessage>{formik.errors.linkedinUrl}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.invitationCode && formik.errors.invitationCode ? true : false
                }
              >
                <FormLabel htmlFor="invitationCode" textStyle="body">
                  Invitation Code *
                </FormLabel>
                <Input
                  id="invitationCode"
                  name="invitationCode"
                  placeholder="Enter the code I shared with you"
                  variant="customInput"
                  {...formik.getFieldProps("invitationCode")}
                />
                <FormErrorMessage>{formik.errors.invitationCode}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.reviewText && formik.errors.reviewText ? true : false
                }
              >
                <FormLabel htmlFor="reviewText" textStyle="body">
                  Your Review *
                </FormLabel>
                <Textarea
                  id="reviewText"
                  name="reviewText"
                  height={250}
                  placeholder="Please share your experience working with me..."
                  variant="customTextarea"
                  {...formik.getFieldProps("reviewText")}
                />
                <FormErrorMessage>{formik.errors.reviewText}</FormErrorMessage>
              </FormControl>
              
              
              <CustomizedButton type="submit" width="full" disabled={isLoading}>
                {isLoading ? (
                  <div>
                    Submitting...
                    <Spinner />
                  </div>
                ) : (
                  "Submit Review"
                )}
              </CustomizedButton>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default LeaveReviewSection;