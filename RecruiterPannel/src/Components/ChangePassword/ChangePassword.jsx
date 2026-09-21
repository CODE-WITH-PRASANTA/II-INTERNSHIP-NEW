import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Please enter both password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    // Simulated password update.
    // Replace this section with your API request.
    setTimeout(() => {
      setLoading(false);
      setSuccess("Your password has been changed successfully.");

      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  return (
    <div className="ChangePassword">
      <div className="ChangePassword__header">
        <h1 className="ChangePassword__title">Settings</h1>
        <p className="ChangePassword__subtitle">
          Manage your account security.
        </p>
      </div>

      <div className="ChangePassword__card">
        <div className="ChangePassword__top">
          <div className="ChangePassword__icon">
            <FiLock />
          </div>

          <div className="ChangePassword__heading">
            <h2>Change Password</h2>
            <p>Keep your account secure with a strong password</p>
          </div>
        </div>

        <div className="ChangePassword__divider"></div>

        <form
          className="ChangePassword__form"
          onSubmit={handleChangePassword}
        >
          {/* New Password */}
          <div className="ChangePassword__field">
            <label htmlFor="newPassword">
              NEW PASSWORD
            </label>

            <div className="ChangePassword__inputWrapper">
              <input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="••••••••"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="ChangePassword__eye"
                onClick={() =>
                  setShowNewPassword((previous) => !previous)
                }
                aria-label={
                  showNewPassword
                    ? "Hide new password"
                    : "Show new password"
                }
              >
                {showNewPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="ChangePassword__field">
            <label htmlFor="confirmPassword">
              CONFIRM NEW PASSWORD
            </label>

            <div className="ChangePassword__inputWrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="••••••••"
                autoComplete="new-password"
              />

              <button
                type="button"
                className="ChangePassword__eye"
                onClick={() =>
                  setShowConfirmPassword((previous) => !previous)
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="ChangePassword__message ChangePassword__message--error">
              <span>!</span>
              <p>{error}</p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="ChangePassword__message ChangePassword__message--success">
              <FiCheckCircle />
              <p>{success}</p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className={`ChangePassword__button ${
              loading ? "ChangePassword__button--loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="ChangePassword__spinner"></span>
                Changing Password...
              </>
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;