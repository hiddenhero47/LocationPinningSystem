import { toast } from "react-toastify";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import moment from "moment";

export const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export function getFirstLetters(inputString) {
  const words = inputString?.split(" ");

  if (!words || words.length === 0 || !inputString) {
    return "N/A"; // No words in the input string
  }

  if (words.length === 1) {
    const word = words[0];
    if (word.length === 1) {
      return word.repeat(2); // If it's a single letter, return it repeated
    }
    return word.slice(0, 2); // If it's a single word, return the first two letters
  }

  const firstWord = words[0];
  const secondWord = words[1];

  return `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
}

export function addCommas(number) {
  if (isNaN(number)) {
    return number.toString();
  }
  const numStr = number.toString();
  const [integerPart, decimalPart] = numStr.split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  if (decimalPart !== undefined) {
    return `${formattedInteger}.${decimalPart}`;
  }

  return formattedInteger;
}

export function truncateHex({ hexString, len }) {
  if (hexString?.length > len && len > 5) {
    const prefixLength = Math.ceil((len - 5) / 2);
    const suffixLength = len - prefixLength - 3; // 3 for the ellipsis

    const prefix = hexString?.substring(0, prefixLength);
    const suffix = hexString?.substring(hexString.length - suffixLength);

    return prefix + "..." + suffix;
  }
  return hexString;
}

export function truncate({ str, len }) {
  if (str.length > len && str.length > 0) {
    let new_str = str + "";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(""));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
}

export const copyTextToClipboard = async (text) => {
  if ("clipboard" in navigator) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("copied");
      return true;
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      toast.error("Failed to copy");
      return false;
    }
  } else {
    try {
      const success = document.execCommand("copy", true, text);
      if (!success) {
        console.error("Failed to copy text to clipboard.");
      }
      toast.success("copied");
      return success;
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      toast.error("Failed to copy");
      return false;
    }
  }
};

export function formatPhoneNumber(phoneNumber) {
  const parsedNumber =
    phoneNumber && parsePhoneNumberFromString(phoneNumber?.toString());
  if (parsedNumber) {
    return parsedNumber.formatInternational();
  }
  return phoneNumber; // Return the original if parsing fails
}

export function getPeriod(period) {
  const today = moment();
  const startDate = today.startOf("day"); // Always start from today
  let endDate;

  switch (period) {
    case "this-week":
      endDate = today.clone().subtract(7, "days"); // Subtract 7 days
      break;
    case "this-month":
      endDate = today.clone().subtract(1, "months"); // Subtract 1 month
      break;
    case "this-year":
      endDate = today.clone().subtract(1, "years"); // Subtract 1 year
      break;
    case "old":
      endDate = today.clone().subtract(10, "years"); // Subtract 10 years
      break;
    default:
      endDate = today;
      break;
  }

  return {
    start: startDate.format("YYYY-MM-DD"),
    end: endDate.format("YYYY-MM-DD"),
  };
}

export const getFromLocalStorage = (value) => {
  if (!value || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(value);
};

// Function to calculate distance using Haversine formula
export const calculateDistance = (loc1, loc2) => {
  if (!loc1 || !loc2) return 0;
  const R = 6371; // Radius of the Earth in km
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(loc2.lat - loc1.lat);
  const dLng = toRad(loc2.lng - loc1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(loc1.lat)) *
      Math.cos(toRad(loc2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

export function getLocationDetails({ lat, lng }) {
  return new Promise((resolve, reject) => {
    const geocoder = new window.google.maps.Geocoder();
    const latLng = { lat, lng };

    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        let city = "";
        let state = "";
        let country = "";
        let countryCode = "";

        results[0].address_components.forEach((component) => {
          if (component.types.includes("locality")) {
            city = component.long_name; // City
          }
          if (component.types.includes("administrative_area_level_1")) {
            state = component.long_name; // State
          }
          if (component.types.includes("country")) {
            country = component.long_name; // Country
            countryCode = component.short_name;
          }
        });

        resolve({ city, state, country, countryCode }); // ✅ Return data through promise
      } else {
        console.error("Geocoder failed due to:", status);
        reject("Geocoder failed");
      }
    });
  });
}


